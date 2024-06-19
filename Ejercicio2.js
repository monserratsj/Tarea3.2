function simulatedServerRequest() {
    return new Promise((resolve, reject) => {
        //retraso
        setTimeout(() => {
            // exito o fracaso
            const isSuccess = Math.random() > 0.5; 
            
            if (isSuccess) {
                // random
                const data = { message: "Datos recibidos exitosamente", data: [1, 2, 3, 4, 5] };
                resolve(data);
            } else {
                // Error
                reject(new Error("Error en la solicitud al servidor"));
            }
        }, 5000);
    });
}

async function handleServerRequest() {
    try {
        const response = await simulatedServerRequest();
        console.log("Respuesta exitosa:", response);
    } catch (error) {
        console.error("Ocurrió un error:", error);
    } finally {
        console.log("Solicitud completada");
    }
}

handleServerRequest();
