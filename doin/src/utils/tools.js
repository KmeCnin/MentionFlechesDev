export default function arrow_direction(direction, def_pos){
    return direction === 'vertical' 
        ? (def_pos === 'ortho' ? '↓' : '↴') 
        : (def_pos === 'diagonale' ? '↳' : '→')
}