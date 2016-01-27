using Models;

namespace Dtos
{
    public class ComponentDto
    {
        public ComponentDto(Component component)
        {
            this.Name = component.Name;
            this.Id = component.Id;
        }

        public ComponentDto()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }

    }
}
