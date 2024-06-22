
/**
 * @openapi
 * /extract/{user_id}:
 *   get:
 *     tags:
 *       - Extract
 *     description: Get transaction extract for a user
 *     parameters:
 *       - name: user_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: Transaction extract retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   transaction_id:
 *                     type: string
 *                   amount:
 *                     type: number
 *                   date:
 *                     type: string
 *                   description:
 *                     type: string
 *       400:
 *         description: Invalid user ID
 *       500:
 *         description: Internal server error
 *   post:
 *     tags:
 *       - Extract
 *     description: Create a new transaction entry
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
 *         description: Transaction entry created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */