"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import signInAction from "./_action";
import { toast } from "react-toastify";
import { createUser } from "@/mongo/user/services";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoggingIn(true);
      // para crear un usuario con acceso a la app,
      // recordar comentar de la linea 24 y 25 si se descomenta esta
      // await createUser(data);
      const response = await signInAction(data);
      if (response?.error) throw new Error(response?.error);
      toast.success("¡Sesión exitosa!");
      setIsLoggingIn(false);
      setIsRedirecting(true);
      reset();
    } catch (error) {
      console.log("in form", error.message);
      setIsLoggingIn(false);
      toast.error("Error al iniciar sesión");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-96 flex flex-col space-y-4">
        <h3 className="text-2xl font-bold text-center">Login</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 min-h-[300px] flex flex-col justify-between"
        >
          <div className="space-y-2">
            <div>
              <label className="block" htmlFor="username">
                Nombre de usuario
              </label>
              <input
                type="text"
                placeholder={"username"}
                {...register("username", {
                  required: true,
                })}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {errors.username ? (
                <span className="text-xs text-red-600">
                  Este campo es requerido
                </span>
              ) : null}
            </div>
            <div>
              <label className="block" htmlFor="password">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="admin-password"
                {...register("password", {
                  required: "Este campo es requerido",
                })}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {errors.password && (
                <span className="text-xs text-red-600">
                  Este campo es requerido
                </span>
              )}
            </div>
          </div>
          {isLoggingIn && (
            <span className="text-xs text-gray-600">Iniciando sesión...</span>
          )}
          {isRedirecting && (
            <span className="text-xs text-gray-600">
              ¡Sesión exitosa! Redirigiendo...
            </span>
          )}
          <div className="flex items-baseline justify-between">
            <button
              className="text-blue-500 py-2 block mt-4 text-center hover:bg-blue-100 hover:text-blue-700 rounded-lg px-3 font-bold border border-blue-500"
              type="submit"
              disabled={isLoggingIn}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
