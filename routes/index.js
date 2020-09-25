var express = require('express');
var router = express.Router();

var homepage = `# Me sida i kursen jsramverk
<img class="me" src="me.jpg" alt="me">
Mitt namn är Björn och jag är född och uppvuxen i Tjautjas som är en by strax utanför Gällivare.\n
Fritiden spenderas med min sambo och våra två katter.
Vi håller för tillfället på att bosätta oss i min stuga i Tjautjas
då lägenheten jag har i Malmberget ska rivas pga. gruvan.\n
Några av mina intressen är spela datorspel, bänka serier/kolla film på netflix och spela gitarr.`;

router.get('/', function(req, res) {
    const data = {
        data: {
            msg: homepage
        }
    };

    res.json(data);
});

module.exports = router;
