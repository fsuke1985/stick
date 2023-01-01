package main

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
)

type JsonStruct struct {
	x string
	y int
	j []string
}

func main() {

	type JsonStruct struct {
		x string
		y int
		j []string
	}

	helloHandler := func(w http.ResponseWriter, req *http.Request) {
		io.WriteString(w, "Hello, World\n")
	}

	jsonHandler := func(w http.ResponseWriter, req *http.Request) {
		jsons := JsonStruct{
			x: "named",
			y: 1,
			j: []string{"a", "b", "c"},
		}
		i, err := json.Marshal(jsons)

		_ = i

		if err != nil {

		}

	}

	http.HandleFunc("/", jsonHandler)
	http.HandleFunc("/hello", helloHandler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
