# 👟 SoleStore — Premium Sneaker E-commerce

Una tienda online moderna y completamente funcional de zapatillas deportivas y urbanas con diseño dark mode premium, flujo de compra interactivo y animaciones suaves.

![SoleStore](https://img.shields.io/badge/Status-Active-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue) ![Version](https://img.shields.io/badge/Version-1.0.0-orange)

## 🎨 Características

### ✨ Frontend
- **Diseño moderno y responsivo** — Dark mode con acentos neon lima (#CCFF00)
- **Navbar sticky** con carrito dinámico y badge de contador
- **Hero section** con animaciones y gradientes
- **Grid de productos** con badges (Nuevo, Sale, Limited)
- **Modal de talles** con disponibilidad visual
- **Carrito lateral interactivo** — agregar/quitar/modificar cantidades
- **Flujo de checkout** de 3 pasos (Envío → Pago → Confirmación)
- **Trust bar** — propuestas de valor (envío gratis, cambios, etc)
- **Reseñas de clientes** — 5 estrellas verificadas
- **Newsletter signup** con descuento de bienvenida
- **Footer completo** con redes sociales y métodos de pago

### 🛠 Funcionalidad
- ✅ Agregar productos al carrito
- ✅ Seleccionar tallas (14 opciones, algunas agotadas)
- ✅ Modificar cantidades en carrito
- ✅ Formulario de envío con validación
- ✅ Seleccionar método de pago (Tarjeta, Mercado Pago, Apple Pay)
- ✅ Cuotas sin interés (1, 3, 6, 12)
- ✅ Confirmación de pedido con número de orden
- ✅ Estimación de entrega
- ✅ Wishlist (favoritos)
- ✅ Toast notifications
- ✅ Búsqueda (placeholder)
- ✅ WhatsApp flotante para consultas

### 🎯 Marcas disponibles
- Nike
- Adidas
- Puma
- Converse
- Fila
- DC Shoes
- New Balance
- Vans
- Reebok
- Under Armour

## 🚀 Inicio rápido

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Python 3.6+ (para levantar servidor local)

### Instalación

1. **Clonás el repositorio:**
```bash
git clone https://github.com/tu-usuario/solestore.git
cd solestore
```

2. **Levantás el servidor local:**

**Windows (PowerShell/CMD):**
```bash
python -m http.server 3000
```

**macOS/Linux:**
```bash
python3 -m http.server 3000
```

3. **Abrís en tu navegador:**
```
http://localhost:3000
```

¡Eso es! 🎉

## 📁 Estructura del proyecto

```
solestore/
├── index.html          # HTML principal (todas las páginas)
├── css/
│   └── styles.css      # Diseño completo + responsive
├── js/
│   └── app.js          # Lógica de productos, carrito, navegación
└── README.md           # Este archivo
```

## 🎮 Flujo de compra

1. **Home** — Explora productos con filtros visuales
2. **Producto** — Click en zapatilla → Modal de talles
3. **Carrito** — Revisa tu selección, modifica cantidades
4. **Envío** — Ingresá dirección completa
5. **Pago** — Seleccioná método y cuotas
6. **Confirmación** — Número de orden + fecha de entrega

## 🎨 Diseño

### Paleta de colores
- **Fondo:** `#0a0a0a` (Negro profundo)
- **Superficies:** `#141313`, `#1c1b1b`, `#201f1f`
- **Acentos:** `#ccff00` (Neon Lime)
- **Texto:** `#e5e2e1` (Blanco cálido)
- **Muted:** `#8e9192` (Gris)

### Tipografía
- **Font:** Inter (Sans-serif)
- **Pesos:** 400 (Regular), 500, 600, 700, 800, 900
- **Escalas:** Display (72px) → Body (16px)

### Componentes
- Botones (Primary, Secondary, Ghost)
- Cards de productos con animaciones
- Modales (Talles, Carrito)
- Forms validados
- Badges y Pills
- Toast notifications

## 📱 Responsive

Optimizado para:
- 📱 Mobile (≤480px)
- 📱 Tablet (481px - 1024px)
- 🖥 Desktop (≥1025px)

Grillas adaptativas que se ajustan automáticamente al tamaño de pantalla.

## 🔒 Seguridad

⚠️ **Nota:** Esta es una demostración educativa. Para producción:
- Nunca guardes datos sensibles en el cliente
- Implementa backend seguro (Node.js, Django, etc)
- Usa HTTPS obligatorio
- Integra con procesador de pagos real (Stripe, Mercado Pago)
- Valida datos en servidor, no solo en cliente

## 🚀 Próximas mejoras

- [ ] Backend con base de datos (MongoDB/PostgreSQL)
- [ ] Autenticación de usuario (Login/Registro)
- [ ] Integración de Stripe/Mercado Pago
- [ ] Búsqueda y filtros funcionales
- [ ] Sistema de comentarios y reseñas
- [ ] Wishlist persistente
- [ ] Historial de pedidos
- [ ] Dashboard de admin
- [ ] PWA (Progressive Web App)
- [ ] Notificaciones push

## 💻 Stack técnico

**Frontend:**
- HTML5
- CSS3 (Custom properties, Grid, Flexbox)
- JavaScript vanilla (ES6+)
- SVG para iconos

**No tiene dependencias externas** — funciona con HTML/CSS/JS puro.

## 📄 Licencia

MIT License — Libre para usar, modificar y distribuir.

## 👨‍💻 Autor

Creado con ❤️ para la comunidad de desarrollo.

## 📞 Soporte

¿Preguntas o sugerencias? Abrí un **Issue** en GitHub.

---

**Made with 🖤 and 💻**

Visitá más proyectos en [GitHub](https://github.com)
