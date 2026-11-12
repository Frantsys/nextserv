const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD = 6;

export function validateLogin(email: string, password: string): string | null {
    if (!EMAIL.test(email.trim())) return "Informe um email válido.";

    if (password.length < MIN_PASSWORD) return `A senha deve ter pelo menos ${MIN_PASSWORD} caracteres.`;

    return null;
}

export function validateSignUp(username: string, email: string, password: string, confirm: string): string | null {
    if (username.trim().length < 3) return "O nome de usuário deve ter pelo menos 3 caracteres.";

    const loginError = validateLogin(email, password);

    if (loginError) return loginError;
    if (password !== confirm) return "As senhas não coincidem.";
    
    return null;
}
