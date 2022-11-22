# Imagem de Origem
FROM node:13-alpine
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json
# Inicializa a aplicação
CMD ["npm", "start"]