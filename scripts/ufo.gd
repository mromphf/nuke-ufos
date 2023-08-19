extends Enemy


func _init():
	_velocity = Vector2(0, 2)
	_hp = 2


func _process(_delta):
	super(_delta)
	rotate(PI / 180)


func _on_collide(body):
	super(body)
	$Animation.play(&"flash")
	$Hit.play()


func _ready():
	$Sprite.play()
