// import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async ({ email, password, cgu }) => {
    const response = await fetch(`http://localhost:3000/users?email=${email}`, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const user = (await response.json())?.[0];
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 8);
        const response = await fetch("http://localhost:3000/users", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password: hashedPassword, cgu }),
        });

        return await response.json();
    } else {
        throw new Error("Un compte est déjà associé à cet utilisateur");

    }

};

export const login = async ({ email, password }) => {
    const response = await fetch(`http://localhost:3000/users?email=${email}`, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const user = (await response.json())?.[0];

    if (response.ok) {
        if (user && await bcrypt.compare(password, user?.password)) {
            localStorage.setItem("token", user.id);
            localStorage.setItem("currentUser", { id: user.id, email: user.email });
            console.log("token", localStorage.getItem("token"));
            return user
        } else {
            throw new Error("Mauvais email/password");
        }
    } else {
        if (user) {
            throw user;
        } else {
            throw new Error("Il y a eu une erreur");
        }
    }
};

export const logout = () => {
    if (localStorage.getItem("token") && localStorage.getItem("currentUser")) {
        localStorage.removeItem('token')
        localStorage.removeItem('currentUser')
    }
};

