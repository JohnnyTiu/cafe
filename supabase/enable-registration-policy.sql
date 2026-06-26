alter table public.registros enable row level security;

drop policy if exists "Permitir registros desde formulario publico" on public.registros;

create policy "Permitir registros desde formulario publico"
on public.registros
for insert
to anon
with check (
    nombre is not null
    and btrim(nombre) <> ''
    and universidad is not null
    and btrim(universidad) <> ''
    and correo is not null
    and correo ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
    and telefono is not null
    and btrim(telefono) <> ''
    and semestre is not null
    and btrim(semestre) <> ''
);
