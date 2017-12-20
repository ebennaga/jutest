const pgp = require(pg-promise);
var logo_url = req.body.logo_url

db.any('alter table "tenant_company" add  $1~ text', [logo_url])