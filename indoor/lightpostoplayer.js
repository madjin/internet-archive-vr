
room.update = function(msec) 
{	
	room.objects["Light1"].pos.x = player.pos.x + 1;
	room.objects["Light1"].pos.y = player.pos.y + 1;
	room.objects["Light1"].pos.z = player.pos.z;
	
}