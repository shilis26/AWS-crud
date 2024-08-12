# Lambda Prueba  💕

Este proyecto ofrece una API que facilita operaciones CRUD esenciales para gestionar usuarios. A través de la API, es posible obtener, añadir, modificar y eliminar usuarios en la base de datos. Los métodos soportados son 'GET', 'POST', 'PUT' y 'DELETE'.

## Endpoints 🍄

### Método `GET`
#### Con este método se podrán apreciar todos los estados declarados actuales 
- **URL:**
database-1.cluster-cjow0ceesp1t.us-east-2.rds.amazonaws.com- 

**Ejemplo de respuesta:**
```json
[
    {
        "id_estado": 15,
        "estado": "PRUEBA FINAL DE PUT"
    },
    {
        "id_estado": 16,
        "estado": "ESTA ES LA PRUEBA DE PUT"
    },
]
```
### Método `POST`
#### Aqui se podrán agregar nuevos estados.
**Ejemplo de respuesta:**

```json
[
    { 
        "estado": "Prueba Post 1"
    },

]
```
### Método `PUT`
#### Con este método se podrá actualizar el detalle del estado si se quiere cambiar.
**Ejemplo de respuesta:**

```json
[
    {
    "id_estado": 1,
        "estado": "Cambio ejemplo"
}
]
```
### Método `DELETE`
**Ejemplo de solicitud:**

```json
[
    {
    "id_estado": 1,
}
]
```
**Ejemplo de respuesta:**

```json
{
    "message": "User deleted successfully",
    "affectedRows": 1
}
```