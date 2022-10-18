import socketIO from 'socket.io-client';
import { baseUrl } from './url';
const URL= baseUrl
const socket = socketIO.connect(URL);

export default socket;