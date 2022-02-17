def build_trie(*words):
    arbol = {}
    nodo = arbol
    for palabra in words:
        if palabra == "":
            palabra = {}
            return arbol
        else:
            palabra = palabra[0]
        for letra in palabra:
            if letra not in nodo:
                nodo[letra] = {}
            nodo = nodo[letra]
        nodo[""] = None
        nodo = arbol
    return arbol
