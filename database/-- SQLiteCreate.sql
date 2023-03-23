-- SQLite
create table evenement (
    id integer primary key, 
    naam text not null
);

create table shift (
    id integer primary key,
    id_evenement integer not null,
    volgorde integer not null,
    titel tet not null,
    omschrijving text not null,
    minAantal integer default 1 not null, 
    Foreign key (id_evenement) References evenement(id)
);

create table shiftInvulling (
    id integer primary key,
    id_shift integer not null, 
    naam text not null,
    FOREIGN key (id_shift) REFERENCES shift(id)
);

insert into shift (id_evenement, volgorde, titel, omschrijving, minAantal)
values (2,3,"Bar","12 -> 13",3);

insert into shiftInvulling (id_shift, naam) values (1, "Hannes"), (2, "Hannes")

select * from shift;

update shift set id_evenement = 2;

create view v_all
as
select * from shift 
JOIN evenement on shift.id_evenement = evenement.id
LEFT JOIN shiftInvulling on shift.id = shiftInvulling.id_shift;

select * from v_all
order by naam, volgorde;