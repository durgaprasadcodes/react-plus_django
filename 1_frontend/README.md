# React + Django Integration With Axios & ContextAPI 

```code

frontend1/
│
└── src/
    ├── api/
    │   └── axiosInstance.js
    ├── services/
    │   └── authService.js
    ├── context/
    │   └── AuthContext.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   └── ProtectedContent.jsx
    ├── pages/
    │   ├── Login.jsx
    │   └── Dashboard.jsx
    ├── App.jsx
    └── main.jsx
```

## AuthProvider Utilation

```mermaid

flowchart TD
    A["React Application"] --> B["AuthProvider"]
    B --> C["Login Component"]
    B --> D["Dashboard"]
    B --> E["Navbar"]

    C --> F["Auth Service"]
    F --> G["Axios Instance"]

    G --> H["Django Login API"]
    H --> I["SimpleJWT"]

    I --> J["Access Token + Refresh Token"]
    J --> K["Token Storage"]

    K --> L["Request Interceptor"]
    L --> M["Protected DRF API"]

    B --> N["Initialize Authentication"]
    N --> O["Refresh Access Token"]
    O --> P["GET /api/auth/me/"]
    P --> B
```

## Authentication Persistence

```mermaid

flowchart TD
    A["Browser Refresh"] --> B["AuthProvider initializes"]
    B --> C["Read Refresh Token"]
    C --> D{"Refresh token exists?"}
    D -->|No| E["Guest User"]
    D -->|Yes| F["Call Django Refresh API"]
    F --> G{"Refresh successful?"}
    G -->|No| H["Clear Tokens"]
    H --> E
    G -->|Yes| I["Store New Access Token"]
    I --> J["Call /auth/me/"]
    J --> K{"User API successful?"}
    K -->|Yes| L["setUser(userData)"]
    K -->|No| H
    L --> M["Authenticated Dashboard"]

```