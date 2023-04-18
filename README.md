# **Prueba técnica para Juniors y Trainees de React en Live Coding**

## **Objetivo**

El objetivo de esta prueba técnica es recuperar un hecho aleatorio de gatos de la primera API, obtener la primera palabra del hecho recuperado, mostrar una imagen de un gato con la primera palabra, y mostrar otra imagen de un gato con la primera palabra del hecho recuperado utilizando la segunda API.

## **APIs**

    Facts Random: https://catfact.ninja/fact
    Imagen Random: https://cataas.com/cat/says/hello

## **Instrucciones**

Para ejecutar la aplicación, sigue estos pasos:

1. Clona el repositorio en tu máquina local
2. Abre una terminal y navega hasta el directorio raíz del proyecto
3. Ejecuta el siguiente comando para instalar las dependencias:

```sh
npm install
```

4. Crea un archivo .env en la raíz del proyecto y define las siguientes variables de entorno:

```sh
REACT_APP_FACT_API=https://catfact.ninja/fact
REACT_APP_IMAGE_API=https://cataas.com/cat/says
```

5. Ejecuta el siguiente comando para iniciar la aplicación:

```sh
npm start
```

6. Abre un navegador web y navega a `http://localhost:3000`

7. Deberías ver una página con la imagen de un gato y un botón. Haz clic en el botón para obtener un hecho aleatorio de gatos y la imagen de otro gato con la primera palabra del hecho.

## **Notas**

- La aplicación utiliza la biblioteca `axios` para realizar solicitudes HTTP a las API.
- La aplicación utiliza la biblioteca `wordpos` para obtener la primera palabra del hecho recuperado.
- La aplicación utiliza la biblioteca `react-bootstrap` para mostrar la imagen del gato y el botón.
- La aplicación utiliza la biblioteca `dotenv` para obtener las variables de entorno definidas en el archivo `.env`.
# Prueba-Tecnica-1-JR
