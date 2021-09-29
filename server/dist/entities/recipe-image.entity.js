"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeImage = void 0;
const typeorm_1 = require("typeorm");
const recipe_entity_1 = require("./recipe.entity");
let RecipeImage = class RecipeImage extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RecipeImage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecipeImage.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecipeImage.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RecipeImage.prototype, "recipeId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RecipeImage.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RecipeImage.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => recipe_entity_1.Recipe, (recipe) => recipe.recipeImages, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", recipe_entity_1.Recipe)
], RecipeImage.prototype, "recipe", void 0);
RecipeImage = __decorate([
    (0, typeorm_1.Entity)()
], RecipeImage);
exports.RecipeImage = RecipeImage;
//# sourceMappingURL=recipe-image.entity.js.map