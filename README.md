# Test-simple-Jest
 
 Antes de agregar nuestra carpeta SRC al proyecto instalaremos el Framework Jest y lo inicializaremos, del punto 1* al 4*, despues del punto 4* agregamos la carpeta src y ejecutamos.

1* Iniciamos - (npm init)

2* Instalamos dependencias - (npm install --save-dev jest typescript ts-jest @types/jest) 

3* Inicializamos ts-jest - (npx ts-jest config:init)

4* En los Scripts de package.json cambiamos por -
    "scripts": {
             "test": "jest",
             "test:watch": "jest --watchAll"
          },
          
5*  Ejecutamos nuestro test con (npm test) o (npm run test:watch) pero este ultimo ejecutará el test en modo watcher y cada cambio volverá  ejecutarlo.

Salida:
![2022-09-06 (2)](https://user-images.githubusercontent.com/78904114/188622523-dcb527c8-444b-41fc-bd36-5446b9f9290a.png)
