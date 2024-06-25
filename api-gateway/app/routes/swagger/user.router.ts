/**
 * @openapi
 * /user:
 *   post:
 *     tags:
 *       - User
 *     description: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cnpj:
 *                 type: number
 *                 example: 4666723490
 *               name:
 *                 type: string
 *                 example: "teste"
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: uuid
 *                   example: "f1e047cb-4958-4b00-96d9-a6a77e83c923"
 *                 name:
 *                   type: string
 *                   example: "Teste"
 *                 message:
 *                   type: string
 *                   example: "User and balance created successfully"
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */