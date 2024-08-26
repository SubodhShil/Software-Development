# Using tree create a family tree of your family

class TreeNode:
    def __init__(self, data, children=[]) -> None:
        self.data = data
        self.children = children

    def __str__(self, level=0) -> str:
        ret = " " * level + str(self.data) + "\n"
        for child in self.children:
            ret += child.__str__(level + 1)
        return ret

    def add_child(self, TreeNode):
        self.children.append(TreeNode)


MilonBala = TreeNode("Milon Bala")
Sankar = TreeNode("Sankar", [])
Shibu = TreeNode("Shibu", [])
Keshab = TreeNode("Keshab", [])

MilonBala.add_child(Sankar)
MilonBala.add_child(Shibu)
MilonBala.add_child(Keshab)

print(MilonBala)