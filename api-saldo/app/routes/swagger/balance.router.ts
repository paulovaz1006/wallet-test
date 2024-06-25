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
 *                 id:
 *                   type: uuid
 *                 user_id:
 *                   type: string
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
 *               amount:
 *                 type: number
 *               description:
 *                 type: string
 *               user_id:
 *                  type: string
 *               type_transaction_id:
 *                  type: string 
 *     responses:
 *       200:
 *         balance: 0,
 *         description: Balance updated successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */