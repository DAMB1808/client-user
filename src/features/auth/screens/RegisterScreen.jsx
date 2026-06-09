import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Alert
} from "react-native"

import { useForm, Controller } from "react-hook-form"
import { COLORS, SPACING, FONT_SIZE } from "../../../shared/constans/theme"
import Input from "../../../shared/components/Input"
import Button from "../../../shared/components/Button"

import kinalSportsLogo from "../../../../assets/kinal_sports.png"

const RegisterScreen = ({ navigation }) => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            nombre: "",
            apellido: "",
            usuario: "",
            telefono: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = async (data) => {

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Image
                        source={kinalSportsLogo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.subtitle}>Únete a Kinal Sports</Text>
                </View>

                <View>
                    <Controller
                        control={control}
                        rules={{ required: "Nombre requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Nombre"
                                placeholder="Tu nombre"
                                onChangeText={onChange}
                                value={value}
                                error={errors.nombre?.message}
                            />
                        )}
                        name="nombre"
                    />

                    <Controller
                        control={control}
                        rules={{ required: "Apellido requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Apellido"
                                placeholder="Tu apellido"
                                onChangeText={onChange}
                                value={value}
                                error={errors.apellido?.message}
                            />
                        )}
                        name="apellido"
                    />

                    <Controller
                        control={control}
                        rules={{ required: "Usuario requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Usuario"
                                placeholder="nombre_usuario"
                                autoCapitalize="none"
                                onChangeText={onChange}
                                value={value}
                                error={errors.usuario?.message}
                            />
                        )}
                        name="usuario"
                    />

                    <Controller
                        control={control}
                        rules={{ required: "Teléfono requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Teléfono"
                                placeholder="Ej: 12345678"
                                keyboardType="phone-pad"
                                onChangeText={onChange}
                                value={value}
                                error={errors.telefono?.message}
                            />
                        )}
                        name="telefono"
                    />

                    <Controller
                        control={control}
                        rules={{ required: "Email requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Email"
                                placeholder="correo@ejemplo.com"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                onChangeText={onChange}
                                value={value}
                                error={errors.email?.message}
                            />
                        )}
                        name="email"
                    />

                    <Controller
                        control={control}
                        rules={{ required: "Contraseña requerida" }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Contraseña"
                                placeholder="••••••••"
                                secureTextEntry
                                autoCapitalize="none"
                                onChangeText={onChange}
                                value={value}
                                error={errors.password?.message}
                            />
                        )}
                        name="password"
                    />

                    <Button
                        title="Registrarse"
                        onPress={handleSubmit(onSubmit)}
                        style={styles.button}
                    />

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>¿Ya tienes cuenta? </Text>
                        <Text
                            style={styles.link}
                            onPress={() => navigation.navigate("Login")}
                        >
                            Inicia Sesión
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        flexGrow: 1,
        padding: SPACING.xl,
        justifyContent: "center",
    },
    header: {
        alignItems: "center",
        marginBottom: SPACING.xxl,
    },
    logo: {
        height: 80,
        width: 200,
        marginBottom: SPACING.sm,
    },
    subtitle: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.secondary,
        marginTop: SPACING.sm,
    },
    form: {
        width: "100%",
    },
    button: {
        marginTop: SPACING.lg,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: SPACING.xl,
    },
    footerText: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
    },
    link: {
        fontSize: FONT_SIZE.md,
        color: COLORS.primary,
        fontWeight: "700",
    },
});

export default RegisterScreen;