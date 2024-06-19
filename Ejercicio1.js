function simulatedServerRequest() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            // éxito o fracaso
            const isSuccess = Math.random() > 0.6; 
            
            if (isSuccess) {
                // random
                const data = { message: "Datos recibidos exitosamente", data: [1, 2, 3, 4, 5] };
                resolve(data);
            } else {
                // Error
                reject(new Error("Error en la solicitud al servidor"));
            }
        }, 2000);
    });
}

// .then(), .catch() y .finally()
simulatedServerRequest()
    .then(response => {
        console.log("Respuesta exitosa:", response);
    })
    .catch(error => {
        console.error("Ocurrió un error:", error);
    })
    .finally(() => {
        console.log("Solicitud completada ");
    });
