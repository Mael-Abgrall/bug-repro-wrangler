# To reproduce:

Install the packages & start the server

```shell
yarn
yarn dev:server
```

Start the client in a new console

```shell
yarn dev:client
# then hit ctrl + c at any point to cancel the dev:client, and look at the logs from the server
```

To compare with Node:

```shell
# replace yarn dev:api by
yarn dev:node
```