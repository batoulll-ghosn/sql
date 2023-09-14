document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("userForm");
    const responseDiv = document.getElementById("response");

    userForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        // Get user input
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Create a user object
        const user = { name, email };

        // Make a POST request to your server
        try {
            const response = await fetch("http://localhost:5000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            if (response.status === 201) {
                const newUser = await response.json();
                responseDiv.textContent = `User created: ${newUser.name} (${newUser.email})`;
                userForm.reset(); // Clear the form
            } else {
                responseDiv.textContent = "Failed to create user.";
            }
        } catch (error) {
            responseDiv.textContent = "Error creating user: " + error.message;
        }
    });
});