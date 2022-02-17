def build_trie(*words):
    arbol = {}
    for palabra in words:
        nodo = arbol
        if palabra == "":
            palabra = {palabra: None}
            return arbol
        for letra in palabra:
            nodo = nodo.setdefault(letra, {})
        nodo[palabra] = None
        #nodo = nodo.setdefault(None, None)
    return arbol
