import { useState, useEffect, useCallback } from "react";
import userClient from "../../../shared/api/userClient.js";

const mapFieldToViewModel = (field) => ({
    ...field,
    name: field.fieldName,
    image: field.photo,
    // El backend no expone ubicación textual para canchas.
    location: `${field.fieldType || "Tipo N/D"} • ${field.capacity || "Capacidad N/D"}`,
    // La disponibilidad visible se deriva de si la cancha está activa.
    isAvailable: Boolean(field.isActive),
});

export const useFields = () => {
    const [fields, setFields] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getFields = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await userClient.get("/fields");

            // 1. Imprime esto en tu consola para ver EXACTAMENTE la estructura de la respuesta
            console.log("Respuesta real del backend:", response.data);

            let finalFields = [];

            // 2. Evaluamos de manera segura dónde está el arreglo real
            if (Array.isArray(response.data)) {
                finalFields = response.data;
            } else if (response.data && Array.isArray(response.data.data)) {
                finalFields = response.data.data;
            } else if (response.data && response.data.data && Array.isArray(response.data.data.items)) {
                // Por si viene paginado como .items
                finalFields = response.data.data.items;
            } else if (response.data && Array.isArray(response.data.fields)) {
                // Por si la propiedad se llama fields
                finalFields = response.data.fields;
            }

            setFields(finalFields.map(mapFieldToViewModel));

        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "Error al obtener canchas");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getFields();
    }, [getFields]);

    return { fields, loading, error, getFields };
};