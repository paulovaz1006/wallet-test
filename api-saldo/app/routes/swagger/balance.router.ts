/**
 * @openapi
 * /balance/{user_id}:
 *   get:
 *     tags:
 *       - Saldo
 *     description: Get balance for a user
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: Balance retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 balance:
 *                   type: number
 *       400:
 *         description: Invalid user ID
 *       500:
 *         description: Internal server error
 *   put:
 *     tags:
 *       - Saldo
 *     description: Update balance for a user
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               balance:
 *                 type: number
 *     responses:
 *       200:
 *         description: Balance updated successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 *   post:
 *     tags:
 *       - Saldo
 *     description: Create a new balance entry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *                 example: "12345"
 *               amount:
 *                 type: number
 *                 example: 100.0
 *               description:
 *                 type: string
 *                 example: "Payment received"
 *     responses:
 *       201:
 *         description: Balance entry created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
