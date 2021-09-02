const { Router } = require('express');
const { getPublicToken } = require('./common/oauth');

const router = Router();

// GET /api/forge/oauth/token - generates a public access token (required by the Forge viewer).
router.get('/token', async(req, res, next) => {
    try {
        const token = await getPublicToken();
        res.json({
            access_token: token.access_token,
            expires_in: token.expires_in
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;