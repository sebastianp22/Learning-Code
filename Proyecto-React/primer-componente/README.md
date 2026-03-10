# 🎓 React Learning Projects

Proyectos funcionales construidos durante el aprendizaje de React, aplicando fundamentos y buenas prácticas de desarrollo.

---

## 📋 Proyectos Incluidos

### 1. ✅ Task Manager
Sistema completo de gestión de tareas con interfaz moderna.

**Funcionalidades:**
- Agregar, editar y eliminar tareas
- Marcar tareas como completadas
- Filtros dinámicos (Todas / Completadas / Pendientes)
- Estadísticas en tiempo real con barra de progreso
- Tema claro/oscuro

**Conceptos aplicados:** 
`useState` • `props` • `map()` • `filter()` • Lifting State Up • Renderizado condicional


**Preview:**

**Modo claro:**
![Task Manager - Light Mode](./screenshots/task-manager-light.png)

**Modo oscuro:**
![Task Manager - Dark Mode](./screenshots/task-manager-dark.png)

### 2. 📇 Contact Manager
Gestor de contactos profesional con validación de seguridad.

**Funcionalidades:**
- Agregar contactos con validación de email (regex)
- Sistema de favoritos con toggle
- Filtros por categoría
- Eliminación de contactos
- Validación anti-XSS básica

**Conceptos aplicados:** 
Componentes reutilizables • CRUD completo • Inputs controlados • Validación de formularios • Inmutabilidad

**Preview:**
![Contact Manager](./Screenshots/contact-manager.png)

## 🛠️ Tecnologías

- **React 18** - Biblioteca principal
- **JavaScript (ES6+)** - Funciones flecha, destructuring, spread operator
- **Vite** - Build tool y dev server
- **Git/GitHub** - Control de versiones

---

## 🚀 Instalación y Uso
```bash
# 1. Clonar repositorio
git clone https://github.com/sebastianp22/Learning-Code.git

# 2. Navegar al proyecto
cd Learning-Code/primer-componente

# 3. Instalar dependencias
npm install

# 4. Ejecutar en modo desarrollo
npm run dev

# 5. Abrir en navegador
# http://localhost:5173
```

---

## 📚 Conceptos React Dominados

- [x] **Componentes funcionales** - Estructura modular y reutilizable
- [x] **useState** - Manejo de estado local
- [x] **Props** - Comunicación padre → hijo
- [x] **Callbacks** - Comunicación hijo → padre
- [x] **map() y key** - Renderizado de listas
- [x] **filter()** - Filtrado de arrays
- [x] **Inputs controlados** - `value` + `onChange`
- [x] **Spread operator** - Inmutabilidad en arrays y objetos
- [x] **Lifting State Up** - Estado compartido entre hermanos
- [x] **Renderizado condicional** - `&&` y operador ternario
- [x] **CRUD operations** - Create, Read, Update, Delete
- [x] **Validación de formularios** - Seguridad básica

---

## 🎯 Arquitectura del Código

### Task Manager
```
TaskList (padre - maneja estado)
├── TaskStats (estadísticas)
├── TaskForm (agregar tareas)
├── TaskFilters (filtros)
├── ThemeToggle (tema)
└── TaskItem (item individual)
```

### Contact Manager
```
ContactManager (padre - maneja estado)
├── ContactForm (formulario con validación)
└── ContactItem (contacto individual)
```

**Patrón aplicado:** Single Source of Truth - el estado vive en el componente padre común.

---

## 🔐 Seguridad Implementada

- ✅ Validación de email con regex
- ✅ Sanitización de inputs (trim)
- ✅ Prevención de envíos vacíos
- ✅ Mensajes de error claros
- ✅ Patrones anti-XSS básicos (próximamente mejorados)

---

## 👨‍💻 Autor

**Sebastián P.**
- 🎓 Técnico en Ciberseguridad
- 💻 Desarrollador Frontend React
- 🔐 Enfoque en desarrollo web seguro

**Especialización:** Aplicaciones React con validación de seguridad integrada.

---

## 📅 Próximos Proyectos

- [ ] Landing page para tatuador con galería dinámica
- [ ] Integración con APIs externas
- [ ] Autenticación de usuarios
- [ ] Dashboard con gráficos (Recharts)
- [ ] Deploy en producción (Vercel/Netlify)

---

## 📝 Notas de Aprendizaje

Este proyecto documenta mi progreso en React, aplicando cada concepto en proyectos funcionales reales.

**Días 1-7:** Fundamentos completos (componentes, estado, props, listas, formularios, arquitectura)

**Objetivo:** Construir proyectos monetizables con código limpio, seguro y mantenible.

---

## 📄 Licencia

Proyecto educativo - 2026