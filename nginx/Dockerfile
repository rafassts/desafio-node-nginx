FROM nginx:1.15.0-alpine

#remove o arquivo padrão de configuração do nginx e copia o arquivo que criamos para carregar ele
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d