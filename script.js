/*
 * Archivo de Estilos (CSS)
 * Contiene la apariencia completa de la página.
 */

/* 1. Reset y Tipografía */
body {
    /* Usando un fondo y la fuente Inter, tal como el ejemplo anterior */
    background-color: #f9fafb; /* bg-gray-50 */
    font-family: 'Inter', sans-serif;
    
    /* Centrado total de la tarjeta */
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
}

/* 2. Estilo de la Tarjeta (Card) */
.card {
    padding: 2rem; /* p-8 */
    background-color: white; 
    
    /* Sombra y esquinas redondeadas */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-xl */
    border-radius: 1rem; /* rounded-2xl */
    
    /* Dimensiones y alineación */
    max-width: 24rem; /* max-w-sm */
    width: 100%;
    text-align: center;
    cursor: pointer; /* Indica que es interactivo */
    
    /* Transición para el efecto hover */
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: scale(1.05); /* Ligeramente más grande al pasar el ratón */
}

/* 3. Estilos de Títulos y Subtítulos */
.title {
    color: #4f46e5; /* text-indigo-600 */
    font-size: 3rem; /* text-5xl */
    font-weight: 800; /* font-extrabold */
    letter-spacing: -0.05em; /* tracking-tight */
    margin-bottom: 0;
}

.subtitle {
    margin-top: 1rem; /* mt-4 */
    color: #6b7280; /* text-gray-500 */
    font-size: 0.875rem; /* text-sm */
}