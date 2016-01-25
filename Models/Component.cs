using System.Collections.Generic;

namespace Models
{
    public class Component: BaseEntity
    {
        public Component()
        {
            this.ComponentPages = new HashSet<ComponentPage>();
        }

        public ICollection<ComponentPage> ComponentPages { get; set; }
    }
}
