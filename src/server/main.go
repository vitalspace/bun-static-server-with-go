package main

/*
#include <stdlib.h>
#include <string.h>
*/

import "C"

import (
	"fmt"
	"net/http"
)

func ch(str string) *C.char {
	return C.CString(str)
}

func str(ch *C.char) string {
	return C.GoString(ch)
}

//export CreateStaticDir
func CreateStaticDir(s *C.char) {
	static := str(s)
	http.Handle("/"+static+"/", http.StripPrefix("/"+static+"/", http.FileServer(http.Dir(static))))
}

//export Render
func Render(r *C.char, f *C.char) {
	route := str(r)
	file := str(f)
	http.HandleFunc(route, func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, file)
	})
}

//export CreateServer
func CreateServer(p *C.char) {
	port := str(p)
	fmt.Println("Server on port:", port)
	err := http.ListenAndServe(":"+port, nil)
	checkNilErr(err)
}

func checkNilErr(err error) {
	if err != nil {
		panic(err)
	}
}

func main() {}
