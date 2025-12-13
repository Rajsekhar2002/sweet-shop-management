"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
try {
    const app = require('./app');
    const PORT = process.env.PORT || 3000;
    console.log('Starting server...');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
catch (error) {
    console.error('Error starting server:', error);
}
//# sourceMappingURL=server.js.map