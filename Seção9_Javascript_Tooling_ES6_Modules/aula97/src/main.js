import 'core-js/stable'; // corrigir o problema de não ter promise no IE
import 'regenerator-runtime/runtime'; // corrigir possiveis problemas no chrome

// importar os scripts acima para garantir o funcionamento do codigo em navegadores mais antigos

import './assets/css/styles.css';

import executa from './modules/promises';

executa();