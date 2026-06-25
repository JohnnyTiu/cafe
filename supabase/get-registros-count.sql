-- Función segura para obtener el número total de registros
-- Permite consultar el conteo de registros de forma pública sin exponer datos privados de los participantes.
create or replace function public.get_registros_count()
returns integer
language plpgsql
security definer -- Se ejecuta con privilegios del creador para saltar RLS en esta consulta específica
as $$
begin
  return (select count(*)::integer from public.registros);
end;
$$;

-- Otorgar permisos de ejecución para usuarios anónimos (públicos) e iniciados
grant execute on function public.get_registros_count() to anon, authenticated;
