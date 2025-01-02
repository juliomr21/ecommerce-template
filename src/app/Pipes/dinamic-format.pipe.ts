import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dinamicFormat',
  standalone: true
})
export class DinamicFormatPipe implements PipeTransform {
  transform(value: any, formato: string): any {
    // if(value != null && value.toString() === 'false')return 'Não'
    // if(value.toString() === 'true')return 'Sim'
    // if (!value) return value;

    switch (formato) {
      case 'currency':
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        case 'numero':
          return new Intl.NumberFormat('pt-BR').format(value);
      case 'date':
        return new Intl.DateTimeFormat('pt-BR').format(new Date(value));
      case 'percent':
        return new Intl.NumberFormat('es-ES', { style: 'percent' }).format(value);
      case 'cpf': {
        let aux = value.split('').join('');
        let sol = aux.slice(0, 3) + '.' + aux.slice(3, 6) + '.' + aux.slice(6, 9) + '-' + aux.slice(9, 12);
        return sol;
      } case 'cnpj': {
        let aux = value.split('').join('');
        let sol = aux.slice(0, 2) + '.' + aux.slice(2, 5) + '.' + aux.slice(5, 8) + '/' + aux.slice(8, 12) + '-' + aux.slice(12, 14)
        return sol;
      }
      case  'documento': {
        let aux = value.split('').join('');
        let sol:any
        if(aux.length === 11)
           sol = aux.slice(0, 3) + '.' + aux.slice(3, 6) + '.' + aux.slice(6, 9) + '-' + aux.slice(9, 12);
          else
          sol = aux.slice(0, 2) + '.' + aux.slice(2, 5) + '.' + aux.slice(5, 8) + '/' + aux.slice(8, 12) + '-' + aux.slice(12, 14)
        return sol
      }
      case 'mbool': {
        if(value)return 'Sim'
        return 'Não'
      }
      default:
        return value; // Devuelve el valor sin formato si no hay coincidencia
    }
  }

}
