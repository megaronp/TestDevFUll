 API - Laravel Framework 8.14.0 (usando exclusão lógica)
=================

Requisito
---------------
Ter instalado composer, mysql e PHP > 7.0

Instalação
---------------
Após clonar o projeto, voce vai entrar no repositório TestDevFUll e rodar o comando:
```
composer install
```
Após instalar todas as depencias pelo composer, vc deve configurar o arquivo .env e não esquecer de criar um banco.

```
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=teste
     DB_USERNAME=root
     DB_PASSWORD=root
```
Vamos importar nosso banco dados 
```
acesse seu banco de dados e importe o arquivo "test.sql" que esta na raiz do projeto TestDevFUll.
```

Vamos gerar uma nova chave para laravel rodando o comando 
```
php artisan key:generate
```

Rodar o servidor com o comando 
``` 
php artisan serve
```
Vamos testar 
  
 [http://localhost:8000/](http://localhost:8000/)
 
 Rotas da API
 ``` 
GET    - /api/patient
GET    - /api/patient/123
POST   - /api/patient
PUT    - /api/patient/123
DELETE - /api/patient/123
```
 
