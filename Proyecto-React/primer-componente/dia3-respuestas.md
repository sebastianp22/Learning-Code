# DÍA 3 — useState PROFUNDO

## BLOQUE 1: Evaluación Conceptual

### 1. ¿Qué problema técnico resuelve useState que una variable normal no puede resolver?

R: Modifica las variables normales dependiendo del estado de lo que se necesite.

### 2. ¿Qué retorna `useState('valor inicial')`? ¿Qué tipo de dato es cada elemento?

R: no sé que devuelve. Debiera ser un string cada elemento.


### 3. Si hago `const [count, setCount] = useState(0)` y luego `count = 5`, ¿qué pasa?

R: Debería hacer una cuenta desde 0 a 5 de 1 en 1.


### 4. ¿Cuándo se ejecuta el código dentro de un componente funcional?

Cuando se ejecuta el return

---

## BLOQUE 1: Observaciones del Experimento

### ¿Qué botón actualiza la UI?

R: Actualiza el botón de useState cada vez que se presiona, en cambio en la variable normal siempre vuelve a 0 a pesar de que en la consola si va cambiando.


### ¿Qué muestra la consola en cada caso?

R:en normal count siempre vuelve a iniciar desde 1, en cambio en useState siempre queda guardado y retoma desde el número que quedó anteriormente.


### ¿Por qué crees que pasa esto?

R: Creo que en una variable normal no usa ningún tipo de memoria y que en useState se utiliza una memoria que va guardando el estado, por lo que se va renderizando de otra manera.

## BLOQUE 2: Comportamiento Asíncrono

### Experimento 1
¿Qué muestra ANTES en el primer clic?
R: Muestra 0

¿Qué muestra DESPUÉS en el primer clic?
R: muestra 0

¿Son iguales o diferentes? ¿Por qué crees que pasa esto?
R: por el comportamiento de ambos, parecieran ser similares

### Experimento 2
¿Cuánto incrementa cada clic en "+3"?
R: aumenta 1 por cada click
¿Qué muestra el console.log?
R: muestra 3 "despues de llamar 3 veces" y en valores va de 0 a 1 a 2

¿Por qué crees que no suma 3?
R: 


### Experimento 3 - Función actualizadora
¿Cuánto suma "+3 (correcto)" por cada clic?
R: suma 3, va así 3-6-9-etc...

¿Cuál es la diferencia entre setStateCount(stateCount + 1) 
y setStateCount(prev => prev + 1)?
R: que en el primer stateCount +1 siempre dará como resultado 1, en cambio con prev => prev + 1 va a ir siempre sumando el número que le antecedía.

¿Cuándo usarías cada uno?

R: Usaria stateCount + 1 cuando necesite que siempre sea el valor 1 y usaría prev => prev + 1 siempre va sumar el anterior resultado + 3, ese sería el resultado esperable.


## BLOQUE 3: Input Controlado

### ¿Qué es event.target.value?
R: Es una propiedad que envía el objeto a react, lo renderiza y pasa el valor.

### ¿Por qué el input necesita value={name}?
(pista: prueba quitando value={name} y observa qué pasa)
R: Sirve para poder limpiar la casilla cuando se aprete el botón limpiar


### ¿Qué pasaría si quito onChange={handleChange}?
(pruébalo) R: Ya no se puede digitar el nombre en la casilla de "Escribe tu nombre"


### ¿Por qué esto se llama "input controlado"?
R: porque controla los valores que se entregan y como se limpian también



markdown## BLOQUE 3: Estado con Objetos

### ¿Qué pasa si quito ...user del updateName?
(escribe "juan@mail.com" en Email, luego "Juan" en Nombre)
Solo queda "Juan" en la UI pero el email no aparece


### ¿Qué hace ...user exactamente?
R: ...user hace que sea visible lo que se va escribiendo de la casilla correspondiente.


### ¿Por qué NO hacemos user.name = event.target.value?
R: porque se iría registrando caracter por caracter y en este caso se busca otra cosa


### Si tengo {name: 'Juan', email: 'juan@mail.com', age: 25}
y quiero actualizar solo el email, ¿cómo lo hago?
(escribe el código)
R: 

  const updateName = (event) => {
    setUser({
      ...user,
      name: event.target.value
    });
  };

  const updateEmail = (event) => {
    setUser({
      ...user,
      email: event.target.value
    });
  };

    const updateAge = (event) => {
    setUser({
      ...user,
      age: event.target.value
    });
  };


  ## EVALUACIÓN FINAL DÍA 3

### 1. ¿Qué retorna useState(10)?
R: Debería retornar 2 arrays [10, funcion]


### 2. ¿Por qué console.log(stateCount) después de setStateCount(5) muestra el valor anterior?
R: porque setStateCountse renderiza para el próximo renderizado


### 3. ¿Cuándo usarías setCount(count + 1) vs setCount(prev => prev + 1)?
R: usaría setCount(count + 1) cuando necesite que sea inmutable el resultado y usaría setCount(prev => prev + 1) cuando necesite que siempre se muestre el resultado anterior sumado + 1


### 4. ¿Qué es un input controlado en React?
R: es una entrada de información que se controla a través del renderizado.


### 5. Si tengo const [user, setUser] = useState({ name: '', age: 0 })
¿Cómo actualizo solo name sin perder age?
(escribe el código exacto)
R: no lo sé