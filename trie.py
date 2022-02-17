def build_trie(*words):
    arbol = {}
    for palabra in words:
        nodo = arbol
        if palabra == "":
            palabra = {}
            return arbol
        for letra in palabra:
            #sumar la palabra anterior al nodo
            if letra in nodo:
                nodo[letra].update(palabra)
                nodo[letra].update(palabra[letra])
            else:
                nodo[letra] = palabra[letra]
            nodo = nodo.int([letra])
    return arbol
