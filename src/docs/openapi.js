const openapiSpec = {
    openapi: "3.0.0",

    info: {
        title: "React Mock API",
        version: "1.0.0",
        description:
            "A dynamic mock API platform where developers can create APIs and store JSON data."
    },

    servers: [
        {
            url: "http://localhost:3000"
        }
    ],

    paths: {

        "/user/register": {
            post: {
                summary: "Register new user",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: { type: "string", example: "user@email.com" },
                                    password: { type: "string", example: "12345678" }
                                }
                            }
                        }
                    }
                },
                responses: {
                    "201": { description: "User registered successfully" }
                }
            }
        },

        "/user/login": {
            post: {
                summary: "Login user",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: { type: "string" },
                                    password: { type: "string" }
                                }
                            }
                        }
                    }
                },
                responses: {
                    "200": { description: "Login successful" }
                }
            }
        },

        "/config/create-api-config": {
            post: {
                summary: "Create API configuration",
                security: [{ bearerAuth: [] }],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    rootRoute: {
                                        type: "string",
                                        example: "todo-api"
                                    },
                                    allMethodsAllowed: {
                                        type: "boolean",
                                        example: true
                                    },
                                    expiresAt: {
                                        type: "string",
                                        format: "date-time",
                                        example: "2026-03-01T00:00:00.000Z"
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    "201": { description: "API configuration created" }
                }
            }
        },

        "/config/update-api-config": {
            patch: {
                summary: "Update API configuration",
                security: [{ bearerAuth: [] }],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    configId: { type: "string" },
                                    updatedConfigs: { type: "object" }
                                }
                            }
                        }
                    }
                },
                responses: {
                    "200": { description: "API configuration updated" }
                }
            }
        },

        "/config/delete-api-config": {
            delete: {
                summary: "Delete API configuration",
                security: [{ bearerAuth: [] }],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    configId: { type: "string" }
                                }
                            }
                        }
                    }
                },
                responses: {
                    "200": { description: "API configuration deleted" }
                }
            }
        },

        "/config/api-configs": {
            get: {
                summary: "Get all API configs of user",
                security: [{ bearerAuth: [] }],
                responses: {
                    "200": { description: "API configs fetched" }
                }
            }
        },

        "/user-api/{rootRoute}/{tag}": {
            get: {
                summary: "Get API data using rootRoute and tag",
                parameters: [
                    {
                        name: "rootRoute",
                        in: "path",
                        required: true,
                        schema: { type: "string" }
                    },
                    {
                        name: "tag",
                        in: "path",
                        required: true,
                        schema: { type: "string" }
                    }
                ],
                responses: {
                    "200": {
                        description: "Data found"
                    }
                }
            }
        },

        "/user-api/{rootRoute}": {
            get: {
                summary: "Get API data using rootRoute",
                parameters: [
                    {
                        name: "rootRoute",
                        in: "path",
                        required: true,
                        schema: { type: "string" }
                    }
                ],
                responses: {
                    "200": {
                        description: "Data found"
                    }
                }
            }
        },
        "/user-api/{rootRoute}/{tag}/create": {
            post: {
                summary: "Create API data document",
                parameters: [
                    {
                        name: "rootRoute",
                        in: "path",
                        required: true,
                        schema: { type: "string" }
                    },
                    {
                        name: "tag",
                        in: "path",
                        required: true,
                        schema: { type: "string" }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                additionalProperties: true
                            }
                        }
                    }
                },
                responses: {
                    "201": {
                        description: "Data created"
                    }
                }
            }
        },

        "/user-api/{rootRoute}/{docId}/update": {
            patch: {
                summary: "Update API document",
                parameters: [
                    {
                        name: "rootRoute",
                        in: "path",
                        required: true,
                        schema: { type: "string" }
                    },
                    {
                        name: "docId",
                        in: "path",
                        required: true,
                        schema: { type: "string" }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                additionalProperties: true
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Data updated"
                    }
                }
            },
            "/user-api/{rootRoute}/{docId}/delete": {
                delete: {
                    summary: "Delete API document",
                    parameters: [
                        {
                            name: "rootRoute",
                            in: "path",
                            required: true,
                            schema: { type: "string" }
                        },
                        {
                            name: "docId",
                            in: "path",
                            required: true,
                            schema: { type: "string" }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Data deleted"
                        }
                    }
                }
            }
        },

        "/user-api/{rootRoute}/{tag}/delete-many": {
            delete: {
                summary: "Delete all documents for a tag",
                parameters: [
                    {
                        name: "rootRoute",
                        in: "path",
                        required: true,
                        schema: { type: "string" }
                    },
                    {
                        name: "tag",
                        in: "path",
                        required: true,
                        schema: { type: "string" }
                    }
                ],
                responses: {
                    "200": {
                        description: "Documents deleted"
                    }
                }
            }
        },
        "/dashboard/apis-data": {
            get: {
                summary: "Get dashboard overview data",
                description: "Returns total APIs created by the user and API configuration data",
                security: [{ bearerAuth: [] }],
                responses: {
                    "200": {
                        description: "Dashboard data retrieved",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: { type: "boolean" },
                                        message: { type: "string" },
                                        data: {
                                            type: "object",
                                            properties: {
                                                totalAPIs: {
                                                    type: "number",
                                                    example: 3
                                                },
                                                data: {
                                                    type: "array",
                                                    items: {
                                                        type: "object",
                                                        properties: {
                                                            rootRoute: { type: "string" },
                                                            allMethodsAllowed: { type: "boolean" },
                                                            expiresAt: {
                                                                type: "string",
                                                                format: "date-time"
                                                            },
                                                            createdAt: {
                                                                type: "string",
                                                                format: "date-time"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },

        "/dashboard/{rootRoute}": {
            get: {
                summary: "Get dashboard data for specific API",
                description: "Returns all documents and tags for a given rootRoute",
                security: [{ bearerAuth: [] }],
                parameters: [
                    {
                        name: "rootRoute",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string"
                        },
                        example: "todo-api"
                    }
                ],
                responses: {
                    "200": {
                        description: "API data retrieved",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        success: { type: "boolean" },
                                        message: { type: "string" },
                                        data: {
                                            type: "object",
                                            properties: {
                                                docs: {
                                                    type: "array",
                                                    items: {
                                                        type: "object",
                                                        additionalProperties: true
                                                    }
                                                },
                                                tags: {
                                                    type: "array",
                                                    items: {
                                                        type: "string"
                                                    },
                                                    example: ["users", "tasks"]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    },

    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        }
    }

}

export default openapiSpec