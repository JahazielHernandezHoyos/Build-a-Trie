def build_trie(*palabras):
    arbol = {}
    nodo = arbol
    for palabra in palabras:
        print(palabra)
        if palabra == "":
            palabra = {}
    return arbol
