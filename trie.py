def build_trie(*palabras):
    arbol = {}
    nodo = arbol
    for palabra in palabras:
        for letra in palabra:
            if letra not in nodo:
                nodo[letra] = {}
            nodo = nodo[letra]
        nodo['*'] = '*'
        nodo = arbol
    return arbol
