# Using locally-installed openapi-generator cli
# Can install with Homebrew
# https://github.com/OpenAPITools/openapi-generator#15---homebrew
openapi-generator generate \
    -i ./docs/api.yaml \
    -g typescript-axios \
    -o ./packages/api-client


#docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli:latest-release generate \
#    -i /local/docs/api.yaml \
#    -g typescript-axios \
#    -o /local/packages/api-client