# Usa uma imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia package.json e package-lock.json para instalar dependências primeiro
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia todo o código do projeto para dentro do container
COPY . .

# Expõe a porta usada pelo Vite
EXPOSE 5173

# Comando para rodar o servidor de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host"]
