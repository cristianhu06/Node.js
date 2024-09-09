import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Informacion del sistema operativo')
console.log('-------------------------------')

console.log('Nombre del sistema operativo', platform())
console.log('Version del sistema operativo', release())
console.log('Arquitectura', arch())
console.log('CPUs', cpus()) // <----- vamos a poder escalar procesos en Node.js
console.log('Memoria Libre', freemem() / 1024 / 1024)
console.log('Memoria Total', totalmem()/ 1024 / 1024)
console.log('Uptime', uptime()/ 60 / 60)