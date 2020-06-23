curl -X POST \
  -H'Content-Type: application/json' \
  -H'Authorization: Bearer CFPAT-HBvXhCaNe9llNf70gFKmn9fE1E9pOMO3cVTS2tr7fw8' \
  -d'{"name": "Shopify Bleach Clone", "src": "https://ultra-held-krill.glitch.me", "locations": [{"location": "app-config"}, {"location": "entry-sidebar"}, {"location": "entry-field", "fieldTypes": [{ "type": "Symbol" }]}]}' \
  https://api.contentful.com/organizations/0yDtCckIUXl0WekXJ2bocz/app_definitions


  curl -X POST \
  -H'Content-Type: application/json' \
  -H'Authorization: Bearer CFPAT-gHxm85f1LQ4P_AYGrzDOnGxqJSpFBhLPB0jxqkHDey4' \
  -d'{"name": "Test do not use", "src": "https://bleach-shopify.herokuapp.com", "locations": [{"location": "app-config"}, {"location": "entry-sidebar"}, {"location": "entry-field", "fieldTypes": [{ "type": "Symbol" }]}]}' \
  https://api.contentful.com/organizations/0yDtCckIUXl0WekXJ2bocz/app_definitions